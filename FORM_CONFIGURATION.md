# Configuración de formularios

Los formularios de contacto y cotización son compatibles con un proveedor externo que acepte solicitudes `POST` como `multipart/form-data`.

## Estado actual

La integración no está configurada. Sin un endpoint, los formularios validan los campos localmente y muestran un aviso de que el envío real está pendiente. No almacenan mensajes en el navegador ni muestran una confirmación falsa.

## Activación

1. Seleccionar y configurar un proveedor de formularios que:
   - Valide nuevamente los datos en el servidor.
   - Proporcione protección contra spam.
   - Admite adjuntos de forma segura si se requieren.
   - Devuelva una respuesta HTTP exitosa únicamente cuando haya recibido la solicitud.
2. Configurar la variable pública de build:

   ```text
   VITE_FORM_ENDPOINT=https://endpoint-del-proveedor.example/forms
   ```

3. Confirmar con el proveedor los nombres de campos `formType`, `name`, `company`, `email`, `phone`, `subject`, `interest`, `quantity`, `message` y `attachment`.
4. Configurar en el proveedor los destinatarios, retención, aviso de privacidad y protección contra spam.
5. Verificar el envío en un entorno controlado antes de publicar.

La URL del endpoint estará incluida en el JavaScript del navegador y debe considerarse pública. No se deben colocar claves privadas, tokens secretos ni credenciales en variables `VITE_*`.
