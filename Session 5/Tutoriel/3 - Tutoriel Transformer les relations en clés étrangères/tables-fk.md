┌────────────────────┐              ┌────────────────────┐
│ Table : VILLE      │              │ Table : AUTEUR     │
├────────────────────┤              ├────────────────────┤
│ id_ville (PK)      │              │ id_auteur (PK)     │
│ nom_ville          │              │ nom_auteur         │
└────────────────────┘              │ prenom_auteur      │
                                    │ email_auteur       │
                                    │ id_ville (FK)      │
                                    └────────────────────┘
┌────────────────────┐              ┌────────────────────┐
│ Table : CATEGORIE  │              │ Table : ARTICLE    │
├────────────────────┤              ├────────────────────┤
│ id_categorie (PK)  │              │ id_auteur (PK)     │
│ nom_categorie      │              │ id_article (PK)    │
└────────────────────┘              │ titre_article      │
                                    │ email_auteur       │
                                    │ contenu_article    │
                                    │ date_publication   │
                                    │ statut_article     │
                                    │ image_article      │
                                    │ id_auteur (FK)     │
                                    │ id_categorie (FK)  │
                                    └────────────────────┘