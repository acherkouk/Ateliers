<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HomeFix - Accueil</title>
        <link rel="stylesheet" href="style.css">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    </head>
    <body>
        <header class="en-tete-site">
            <nav class="barre-navigation">
                <a href="index.html" class="logo">
                    <span class="logo-sombre">Home</span><span class="logo-couleur">Fix</span>
                </a>
                <ul class="liens-navigation">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Nos pros</a></li>
                    <li><a href="#">Comment ça marche</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <a href="#" class="bouton-connexion">Se connecter</a>
            </nav>
        </header>
        <main>
            <section class="introduction">
                <div class="introtext">
                    <span>VOTRE MAISON, ENTRE DE BONNES MAINS</span>
                    <h1>Les bons pros.<br><span>La vie plus simple.</span></h1>
                    <p>Plomberie, ménage, jardinage et bien plus. Trouvez un<br>prestataire, comparez les devis et réservez votre service<br>à domicile en toute simplicité.</p>
                    <a href="#" class="découvrir">Décrire mon besoin &rarr;</a>
                    <a href="#" class="savoir-plus">En savoir plus</a>
                </div>
                <div class="image-hero">
                    <img src="images/Home Fix.png" alt="un homme">
                </div>
            </section>
            <section class="options-consulter">
                <div class="option-card">
                    <div class="option-icone1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wrench preview-icon"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/></svg>
                    </div>
                    <div class="option-text">
                        <h3>Un pro qualifié</h3>
                        <p>Vérifié par HomeFix</p>
                    </div>
                </div>
                <div class="option-card">
                    <div class="option-icone2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users-round preview-icon">
                            <path d="M18 21a8 8 0 0 0-16 0" />
                            <circle cx="10" cy="8" r="5" />
                            <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" />
                        </svg>
                    </div>
                    <div class="option-text">
                        <h3>Réservation confirmée</h3>
                        <p>Suivez chaque étape</p>
                    </div>
                </div>
                <div class="option-card">
                    <div class="option-icone3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thumbs-up preview-icon"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/><path d="M7 10v12"/></svg>
                    </div>
                    <div class="option-text">
                        <h3>Meilleure Qualité</h3>
                        <p>Exceptionnelle</p>
                    </div>
                </div>
            </section>
            <section class="formation">
                <div class="intro-formation">
                    <div class="titre-formation">
                        <span>NOS SERVICES</span>
                        <h2>Choisissez quelle service vous intéresse</h2>
                    </div>
                    <div class="option-formation">
                        <a href="#">Voir tous les services &rarr;</a>
                    </div>
                </div>
                <section class="services-formation">
                <?php foreach ($Services as $Service): ?>
                        <div class="info-formation">
                            <div class="card-formation">
                                <div>
                                    <a href=""><img class="service-image" src="<?= $Service["image"] ?>"></a>
                                </div>
                                <div class="padding-info">
                                    <p class="service-icon"><?= $Service["svg"] ?></p>
                                    <p class="service-name"><?= $Service["nom"] ?></p>
                                    <p class="service-description"><?= $Service["Description"] ?></p>
                                    <a class="service-link" href="#">En savoir plus &rarr;</a>
                                </div>
                            </div>
                        </div>
                <?php endforeach; ?>
                </section>
            </section>
        </main>
        <footer>
            <section class="footer">
                <div class="logo-footer">
                    <a href="homapage.html" class="logo">
                        <span class="logo-sombre">Home</span><span class="logo-couleur">Fix</span>
                    </a>
                    <p>&copy; 2025 HomeFix. Tous droits réservés.</p>
                </div>
                <ul class="nav-footer">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Formations</a></li>
                    <li><a href="#">À propos</a></li>
                    <li><a href="#">Contact</a></li>
                    <li>
                        <div class="image-facebook">
                            <a href="#" target="_blank">
                                <img src="images/facebook.png" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="image-linkedin">
                            <a href="#" target="_blank">
                                <img src="images/linkedin.png" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="image-instagram">
                            <a href="#" target="_blank">
                                <img src="images/instagram.png" alt="">
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="image-youtube">
                            <a href="#" target="_blank">
                                <img src="images/youtube.png" alt="">
                            </a>
                        </div>
                    </li>
                </ul>
            </section>
        </footer>
    </body>
</html>