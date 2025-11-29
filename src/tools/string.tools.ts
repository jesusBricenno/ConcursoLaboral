async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    alert("¡Texto copiado al portapapeles!");
  } catch (err) {
    alert(`Error al copiar texto con API moderna: ${err}`);
  }
}

export { copyToClipboard };
