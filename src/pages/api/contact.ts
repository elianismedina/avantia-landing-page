import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const telefono = formData.get("telefono");
    const empresa = formData.get("empresa");
    const sector = formData.get("sector");
    const sector_otro = formData.get("sector_otro");
    const personas_capacitar = formData.get("personas_capacitar");
    const expectativas = formData.get("expectativas");

    const finalSector = sector === "otro" ? sector_otro : sector;

    // Use import.meta.env for Astro environment variables
    const airtablePat = import.meta.env.AIRTABLE_PAT || process.env.AIRTABLE_PAT;
    const airtableBase = import.meta.env.AIRTABLE_BASE_ID || process.env.AIRTABLE_BASE_ID;
    const airtableTable = import.meta.env.AIRTABLE_TABLE_NAME || process.env.AIRTABLE_TABLE_NAME;

    if (!airtablePat || !airtableBase || !airtableTable) {
      console.error("Missing Airtable environment variables");
      return new Response(
        JSON.stringify({ error: "Configuración de Airtable incompleta en el servidor." }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const airtableData = {
      fields: {
        Nombre: nombre,
        Email: email,
        Telefono: telefono,
        Empresa: empresa,
        Sector: finalSector,
        Personas: personas_capacitar,
        Expectativas: expectativas,
      },
    };

    const response = await fetch(
      `https://api.airtable.com/v0/${airtableBase}/${encodeURIComponent(airtableTable)}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${airtablePat}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(airtableData),
      }
    );

    if (!response.ok) {
      const errText = await response.text();

      console.error("Airtable API error response:", errText);
      return new Response(JSON.stringify({ error: `Error de Airtable: ${response.statusText}` }), {
        status: response.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Endpoint submission error:", error);
    return new Response(JSON.stringify({ error: error.message || "Error interno del servidor." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
