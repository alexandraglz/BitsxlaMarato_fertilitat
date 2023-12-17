# BitsxlaMarato 2023: Hacking the secrets of the seminal microbiome

## Overview
This repository contains the codebase and documentation for our project developed during the [BitsxlaMarató 2023 Hackathon](https://www.fib.upc.edu/ca/la-marato) at the Faculty of Informatics of Barcelona (FIB), Technical University of Catalonia (UPC). The goal of our project is to investigate potential associations between bacterial profiles, derived from clinical and seminal microbiota data of infertile patients and controls, and male fertility. We have employed advanced bioinformatics tools, statistical analysis, and machine learning algorithms for this purpose.

## Project Structure
data: Contains the datasets used for analysis.
notebooks: Jupyter notebooks for data analysis, PCA, clustering, and modeling.
src: Python source code for the backend of the web application.
web: Frontend code for the web application.
docs: Documentation files, including this README.


├── LICENSE
├── README.md          <- The top-level README for developers using this project.
├── requirements.txt         
├── data
│   ├── raw            <- The original, immutable data dump.
│   │   ├── read_data.ipynb <- Script to read input xlsx files and generate a csv for each page.
|   │   ├── illumina <- Data obtained by Illumina sequencing.
|   │   |   ├── Family-level microbiota.csv
|   │   |   ├── Genus-level microbiota.csv
|   │   |   ├── Pylum-level microbiota.csv
|   │   |   ├── Sample info + Sperm quality.csv
|   │   |   ├── README.txt
|   │   |   └── Metadata_and_relative_abundance_of_seminal_microbiota_from_idiopathic_infertile_patients_and_donors.xlsx
│   │   ├── nanopore <- Data obtained by Nanopore sequencing.
|   │   |   ├── MANIFEST.TXT
|   │   |   ├── README.txt
|   │   |   └── Relative abundance of seminal microbiota from idiopathic infertile patients and donors using MinION sequencing.xlsx
│   │   └── NP_metabolica <- Metabolite-Microbe database.
|   │       ├── NPAtlas.csv
|   │       └── NPAtlas.xlsx
|   │
|   ├── processed  
|       │
|       └──
|   
└── analysis 
  

## Web Application
We have developed a web application that allows users (doctors) to input new samples and receive predictions for cluster membership and fertility status. The application also provides visualizations of cluster distributions for all bacteria, with the new sample highlighted.

## Contributors
[Arlet Corominas](https://github.com/arletcoro)
[Alexandra González](https://github.com/alexandraglz)
[Hakima Marouan](https://github.com/haakima)

## Acknowledgments
We would like to express our gratitude to [La Marató de TV3](https://www.ccma.cat/tv3/marato/2023/310/) and the [Faculty of Informatics at UPC](https://www.fib.upc.edu) for organizing this hackathon and providing us with the opportunity to work on this meaningful project.

## License
This project is licensed under the [License Name] - see the LICENSE.md file for details.

## Contact
For questions or inquiries, please contact:

[Arlet Corominas](arlet.corominas@estudiantat.upc.edu)
[Alexandra González](alexandra.gonzalez.alvarez@estudiantat.upc.edu)
[Hakima Marouan](hakima.marouan@estudiantat.upc.edu)