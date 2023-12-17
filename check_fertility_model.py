import sys
import json
import matplotlib.pyplot as plt
import numpy as np
import io
import base64

def check_fertility_model():
    try:
        input_data = sys.stdin.read()
        if not input_data:
            raise ValueError('No se proporcionaron datos de entrada.')
        formData = json.loads(input_data)
        csv_file_base64 = formData.get('csvFile')


        data_level = formData.get('dataLevel')
        print('Nivel de datos:', data_level, file=sys.stderr)

        csv_file = base64.b64decode(csv_file_base64).decode('utf-8')
        if csv_file:
            print('Archivo CSV recibido:', csv_file[:50], file=sys.stderr)

        graph_image = generate_graph()
        result_data = {'isFertile': 'true', 'graphImage': graph_image, 'dataLevel': data_level}
        print(json.dumps(result_data))
    except Exception as e:
        print('Error en check_fertility_model:', e, file=sys.stderr)
        error_data = {'isFertile': 'false', 'error': str(e), 'result': str(input_data)}
        print(json.dumps(error_data))

def generate_graph():
    try:
        x = np.linspace(0, 10, 100)
        y = np.sin(x)

        fig, ax = plt.subplots()
        ax.plot(x, y)
        ax.set(xlabel='X-axis', ylabel='Y-axis', title='Simple Sinusoidal Graph')

        print('Generando gráfico...', file=sys.stderr)
        
        image_stream = io.BytesIO()
        fig.savefig(image_stream, format='png')
        image_stream.seek(0)

        encoded_image = base64.b64encode(image_stream.read()).decode('utf-8')
        print('Imagen generada correctamente...', file=sys.stderr)        
        return encoded_image
    except Exception as e:
        print('Error en generate_graph:', e)
        raise

if __name__ == "__main__":
    check_fertility_model()