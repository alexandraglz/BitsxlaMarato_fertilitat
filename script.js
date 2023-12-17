function convertFileToBlob(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            console.log('FileReader.onload event triggered.');
            const base64String = reader.result.split(',')[1];
            const binaryString = atob(base64String);
            const byteArray = [];
            for (let i = 0; i < binaryString.length; i++) {
                byteArray.push(binaryString.charCodeAt(i));
            }
            const blob = new Blob([new Uint8Array(byteArray)], { type: file.type });
            resolve(blob);
        };
        reader.onerror = error => {
            console.error('Error in FileReader:', error);
            reject(error);
        };
        reader.readAsDataURL(file);
    });
}

async function checkFertility() {
    console.log('Inside checkFertility');

    const csvFileInput = document.getElementById('csvFile');
    const csvFile = csvFileInput ? csvFileInput.files[0] : null;
    const dataLevel = document.getElementById('dataLevel').value;

    if (!csvFile) {
        console.error('No se ha seleccionado ningún archivo CSV.');
        return;
    }

    try {
        const csvFileBlob = await convertFileToBlob(csvFile);

        console.log('XMLHttpRequest...');
        const xhr = new XMLHttpRequest();

        console.log('Info sent to server...');

        xhr.open('POST', 'http://localhost:3000/api/check-fertility', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                const result = JSON.parse(xhr.responseText);
                console.log('Server response:', result);

                const fertilityStatusElement = document.getElementById('fertilityStatus');
                const graphImageElement = document.getElementById('graphImage');

                if (result.isFertile) {
                    fertilityStatusElement.textContent = 'Es probable que seas fértil en este momento.';
                } else {
                    fertilityStatusElement.textContent = 'No se puede confirmar la fertilidad en este momento.';
                }

                graphImageElement.src = `data:image/png;base64, ${result.graphImage}`;
                console.log("Respuesta del servidor:", result);

                const resultsElement = document.getElementById('results');
                resultsElement.classList.remove('hidden');
            } else {
                throw new Error('Error al comprobar la fertilidad');
            }
        };

        xhr.onerror = function () {
            throw new Error('Error en la solicitud XMLHttpRequest');
        };

        const formData = new FormData();
        formData.append('csvFile', csvFileBlob, csvFile.name);
        formData.append('dataLevel', dataLevel);

        xhr.send(formData);
    } catch (error) {
        console.error('Error al comprobar la fertilidad:', error.message);
    }
}

function handleFileChange() {
    console.log('Inside handleFileChange');

    const csvFileInput = document.getElementById('csvFile');
    const fileNameDisplay = document.getElementById('fileNameDisplay');

    if (csvFileInput.files.length > 0) {
        fileNameDisplay.textContent = `Archivo seleccionado: ${csvFileInput.files[0].name}`;
    } else {
        fileNameDisplay.textContent = 'No se ha seleccionado ningún archivo';
    }
}

document.getElementById('csvFile').addEventListener('change', handleFileChange);
