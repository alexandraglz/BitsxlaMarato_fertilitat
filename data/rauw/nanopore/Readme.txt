This documentation file was generated on 2022-04-04 by Sergio Garcia Segura



GENERAL INFORMATION
-------------------

1. Title of Dataset:
Relative abundance of seminal microbiota from idiopathic infertile patients and donors using MinION sequencing platform


2. Authorship: 

	Name: Sergio Garcia-Segura
	Institution: Universitat Autònoma de Barcelona
	Email: sergio.garcia.segura@uab.cat
	ORCID: 0000-0001-9594-2938

	Name: Maria Oliver-Bonet
	Institution: Universitat Autònoma de Barcelona
	Email: maria.oliver@uab.cat
	ORCID: 0000-0001-5635-6741

	Name: Jordi Benet
	Institution: Universitat Autònoma de Barcelona
	Email: jordi.benet@uab.cat
	ORCID: 0000-0001-6185-2555


3. Contact:

	Name: Maria Oliver-Bonet
	Institution: Universitat Autònoma de Barcelona
	E-mail: maria.oliver@uab.cat
	ORCID: 0000-0001-5635-6741


DESCRIPTION
-----------

1. Dataset language:
English


2. Abstract:
Data set obtained as a result of the sequencing by ONT MinION platform and subsequent taxonomic classification of the 16S rRNA gene of seminal microbiota from idiopathic infertile men and donors. The results are shown in terms of relative abundance of each bactera identified for each individual and are grouped into spreadsheets by taxonomic level (phylum, family, and genera).


3. Keywords:
seminal microbiome, human fertility, male infertility, MinION, Nanopore


4. Kind of data:

Experimental data


5. Date of data collection (single date or date range):
2017-07-25 - 2021-05-01


6. Date of dataset publication:
2023-03-15


7. Funding sources: 

	Funding agency: Instituto de Salud Carlos III
	Project number: PI14/00119

	Funding agency: Generalitat de Catalunya
	Project number: 2017SGR1796


8. Geographic location/s of data collection:
Palma de Mallorca, Illes Balears, Spain
Barcelona, Catalunya, Spain



ACCESS INFORMATION
------------------

1. Creative Commons License of the dataset:
CC0



2. Dataset DOI:
10.34810/data680


3. Related publication:
Garcia-Segura, S.; del Rey, J.; Closa, L.; Garcia-Martínez, I.; Hobeich, C.; Castel, A.B.; Vidal, F.; Benet, J.; Oliver-Bonet, M. "Characterization of Seminal Microbiome of Infertile Idiopathic Patients Using Third-Generation Sequencing Platform". Int. J. Mol. Sci. 2023, 24, 7867. https://doi.org/10.3390/ijms24097867




VERSIONING AND PROVENANCE
-------------------------

1. Last modification date:
2022-02-08


2. Was data derived from another source?:
No


3. Additional related data collected that was not included in the current data package:
N/A


METHODOLOGICAL INFORMATION
--------------------------

1. Description of methods used for collection-generation of data: 
Collection: Seminal samples were collected by masturbation after a procedure to avoid bacterial contamination, which consist on urinating, washing hands and penis and ejaculation in sterile recipient.
Microbiome analysis: Microbiota DNA extraction was performed with ZymoBIOMICS DNA Microprep. Full-lenght 16S rRNA gene were sequenced after amplification by PCR with 27F and 1494R universal primers. DNA library preparation was performed using PCR Barcoding kit according Four-primer PCR (SQK-PBK004) workflow (Nanopore protocol, 2017). DNA sequencing was performed using Oxford Nanopore Technologies MinION system.


2. Methods for processing the data: 
Sequencing data was processed with FastQC Toolkit to read quality filtering (<150pb, >30 q-phred score, de novo chimeric reads elimination).
Taxonomic classification of bacterial reads was performed by 16S Workflow from EPI2ME software platform.


3. Instrument- or software- specific information needed to interpret the data:
Spreadsheet software compatible with .xlsx extension (e.g. Microsoft Excel, Google Sheets, LibreOffice...)


4. Instruments, calibration and standards information:
N/A


5. Environmental or experimental conditions:
Cellular biology lab conditions. Sterile conditions for microbiome analysis.
Computational environment: MacOS and EPI2ME software platform (cloud system)


6. Quality-assurance procedures performed on the data:
N/A



FILE OVERVIEW
--------------

1. Explain the file naming convention, if applicable:
N/A


2. File List:

	Filename: Relative abundance of seminal microbiota from idiopathic infertile patients and donors using MinION sequencing.xlsx       
	Short description: Spreadsheed including microbiome relative abundance data.       



3. Relationship between files:
N/A


4. File format:
.xlsx


