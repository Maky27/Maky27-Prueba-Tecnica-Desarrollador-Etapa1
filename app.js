// Lee el archivo .txt
fetch('datos.txt')
  .then(response => response.text())
  .then(data => {
    // Divide el texto en líneas y procesa cada una
    const lines = data.split('\n');
    const tableBody = document.getElementById('table-body');

    lines.forEach(line => {
      // Divide cada línea en elementos separados por #
      const [index, nombre, valor1, valor2] = line.split('#').filter(Boolean);

      // Crea una fila de la tabla con los datos
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${index}</td>
        <td>${nombre}</td>
        <td>${parseFloat(valor1).toFixed(4)}</td>
        <td>${parseInt(valor2)}</td>
      `;

      tableBody.appendChild(row); // Agrega la fila a la tabla
    });
  })
  .catch(error => console.error('Error al leer el archivo:', error));
