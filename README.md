# BitsxlaMarato 2023: Hacking the secrets of the seminal microbiome

## Overview
This repository contains the codebase and documentation for our award-winning project developed during the [BitsxlaMarató 2023 Hackathon](https://www.fib.upc.edu/ca/la-marato) at the Faculty of Informatics of Barcelona (FIB), Technical University of Catalonia (UPC). The goal of our project is to investigate potential associations between bacterial profiles, derived from clinical and seminal microbiota data of infertile patients and controls, and male fertility. We have employed advanced bioinformatics tools, statistical analysis, and machine learning algorithms for this purpose.

## Hackathon Victory
🏆 **We Won the Hackathon!** Our project was awarded first place at the [BitsxlaMarató 2023 Hackathon](https://www.fib.upc.edu/ca/la-marato) organized by the Faculty of Informatics of Barcelona (FIB), [Hackers@UPC](https://hackersatupc.org/) and [Barcelona Supercomputing Center - Centro Nacional de Supercomputación (BSC](https://www.bsc.es/). We are excited and grateful for this recognition, highlighting our team's dedication and innovative approach in investigating potential associations between bacterial profiles and male fertility.

To delve into our project's journey, check out our [Devpost submission](<link-to-your-devpost-submission>).

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
    │   │   ├── illumina <- Data obtained by Illumina sequencing.
    │   │   │   ├── Family-level microbiota.csv
    │   │   │   ├── Genus-level microbiota.csv
    │   │   │   ├── Pylum-level microbiota.csv
    │   │   │   ├── Sample info + Sperm quality.csv
    │   │   │   ├── README.txt
    │   │   │   └── Metadata_and_relative_abundance_of_seminal_microbiota_from_idiopathic_infertile_patients_and_donors.xlsx
    │   │   ├── nanopore <- Data obtained by Nanopore sequencing.
    │   │   │   ├── MANIFEST.TXT
    │   │   │   ├── README.txt
    │   │   │   └── Relative abundance of seminal microbiota from idiopathic infertile patients and donors using MinION sequencing.xlsx
    │   │   └── NP_metabolica <- Metabolite-Microbe database.
    │   │       ├── NPAtlas.csv
    │   │       └── NPAtlas.xlsx
    │   │
    │   └── processed  
    │       ├── family_clusters_fertility.csv
    │       ├── genus_clusters_fertility.csv
    │       └── pylum_clusters_fertility.csv
    │  
    ├── src
    │   ├── features
    │   │   └── read_data.ipynb
    │   │
    │   └── models 
    │       ├── KNN 
    │       │   ├── family_knn
    │       │   ├── genus_knn
    │       │   └── pylum_knn
    │       ├── MLP 
    │       │   ├── family_mlp
    │       │   ├── genus_mlp
    │       │   └── pylum_mlp
    │       └── RandomForest 
    │           ├── family_random_forest
    │           ├── genus_random_forest
    │           └── pylum_random_forest
    │    
    └── analysis
        ├── KNN
        │   ├── family_clusters_knn.ipynb
        │   ├── genus_clusters_knn.ipynb
        │   └── pylum_clusters_knn.ipynb
        ├── MLP
        │   ├── family_mlp_model.ipynb
        │   ├── genus_mlp_model.ipynb
        │   └── pylum_mlp_model.ipynb
        ├── RandomForest
        │   ├── family_randomforest_model.ipynb
        │   ├── genus_randomforest_model.ipynb
        │   └── pylum_randomforest_model.ipynb
        ├── analysis_clinical_info.ipynb
        └── check_fertility_model_pylum.ipynb
  
## Web Application
We've crafted a user-friendly web application for doctors to input samples and receive predictions on cluster membership and fertility status. The app also features visualizations highlighting new samples within overall cluster distributions. Currently in the final development stage, the web page is accessible in the corresponding repository branch because it is not fully functional yet. Your feedback is welcomed as we add the finishing touches before the official launch. Stay tuned for an enhanced user experience in microbial sample analysis and fertility assessment.

## Contributors
The people involved in this project are [Arlet Corominas](https://github.com/arletcoro), [Alexandra González](https://github.com/alexandraglz) and [Hakima Marouan](https://github.com/haakima).

## Acknowledgments
We would like to express our gratitude to [La Marató de TV3](https://www.ccma.cat/tv3/marato/2023/310/) and the [Faculty of Informatics at UPC](https://www.fib.upc.edu) for organizing this hackathon and providing us with the opportunity to work on this meaningful project.

## License
This project is licensed under the [License Name] - see the LICENSE.md file for details.

## Contact
For questions or inquiries, please contact:

- [Arlet Corominas](mailto:arlet.corominas@estudiantat.upc.edu)
- [Alexandra González](mailto:alexandra.gonzalez.alvarez@estudiantat.upc.edu)
- [Hakima Marouan](mailto:hakima.marouan@estudiantat.upc.edu)
