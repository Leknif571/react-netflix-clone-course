# BOUKADA Adel

# react-netflix-clone-course






### Je n'ai pas eu le temps pour...
    -Faire la page recherche
    -Faire l'ajout dans MyList
    -Récupérer liste de série et terminer la modal série

### Les erreurs potentielles que je n'ai pas compris actuellement
    -Mes données appeler par fetch et dans des useEffect ne se charge pas 
    -Quand je rafraichis les pages mes données se casse 
        -J'avais commencer a charger les film via redux, ca me faisais cette erreur,
        j'ai donc essayer de faire les fetch en dur mais toujours la même erreurs.

### Les Difficultés
    -Le temps/ en plus de gérer d'autre projet (j'était un peu en retard ^^')

### Dans l'ensemble
    -C'était un bon projet, qui ma permis d'apprendre un peu plus sur react et de m'améliorer 
    même si il me manque encore certaine connaissance que j'aimerais approfondir prochainement




```

---------------------------------------------------------------
 _______    ______   __    __  __    __   ______   _______    ______  
|       \  /      \ |  \  |  \|  \  /  \ /      \ |       \  /      \ 
| $$$$$$$\|  $$$$$$\| $$  | $$| $$ /  $$|  $$$$$$\| $$$$$$$\|  $$$$$$\
| $$__/ $$| $$  | $$| $$  | $$| $$/  $$ | $$__| $$| $$  | $$| $$__| $$
| $$    $$| $$  | $$| $$  | $$| $$  $$  | $$    $$| $$  | $$| $$    $$
| $$$$$$$\| $$  | $$| $$  | $$| $$$$$\  | $$$$$$$$| $$  | $$| $$$$$$$$
| $$__/ $$| $$__/ $$| $$__/ $$| $$ \$$\ | $$  | $$| $$__/ $$| $$  | $$
| $$    $$ \$$    $$ \$$    $$| $$  \$$\| $$  | $$| $$    $$| $$  | $$
 \$$$$$$$   \$$$$$$   \$$$$$$  \$$   \$$ \$$   \$$ \$$$$$$$  \$$   \$$
                                                                      
---------------------------------------------------------------
```

## Features

-   Login
-   Who's watching
    -   Create new profile
    -   Edit profile
    -   Delete profile
-   Home page
    -   Section by type
    -   Top shows
-   My List (care, this is scoped to a profile)
    -   Add to my List
    -   Remove from my List
-   Display details of a show
    -   Movie: description, actors, cover, etc
    -   Series: list of episodes, description, actors, cover,
-   Search

### To go further

-   Internationalization [Documentation](https://react.i18next.com/getting-started)
-   Display trailers from youtube

## How to get data

You have to use [this](https://www.themoviedb.org/) to get all your data. You first have to create an api key then you are free to use it.
[Documentation](https://developers.themoviedb.org/3)

## How to store data

To store data about user we will use localeStorage. This is unsafe for this kind of data but this is not the purpose of the course.
[Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

## Routing

For your routing use react-router-dom.
[Documentation](https://v5.reactrouter.com/web/guides/quick-start)

## Design

You have to use MUI lib to build your interfaces.
[Documentation](https://mui.com/)

![](Assets/homepage.png)
![](Assets/login.png)
![](Assets/movieDetails.png)
![](Assets/mylist.png)
![](Assets/search.png)
![](Assets/sectionByType.png)
![](Assets/serieDetails.png)
![](Assets/serieEpList.png)
![](Assets/topshows.png)
![](Assets/whoswatching.png)
