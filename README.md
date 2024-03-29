# Tutoriel PostCSS

Présentation et configuration de PostCSS et de certains de ses plugins, notamment la biblothèque de style [Tailwind](https://tailwindcss.com/).

- [PostCSS](#postcss)
  - [Qu'est ce que PostCSS ?](#quest-ce-que-postcss-)
  - [Installation et configuration](#installation-et-configuration)
  - [Installation et configuration d'un plugin](#installation-et-configuration-dun-plugin)
- [Plugins PostCSS](#plugins-postcss)
  - [PostCSSimport](#postcssimport)
  - [CSSNano](#cssnano)
  - [Autoprefixer](#autoprefixer)
  - [Tailwind](#tailwind)
- [Liens utiles](#liens-utiles)

# PostCSS 

<img src="img/postcss_logo.svg" width="100" height="100">
 


## Qu'est ce que PostCSS ?

PostCSS est un outil permettant de transformer du CSS grâce à des plugins Javascript. Les possibilités offertes par cet outil sont infinies grâce à son son système de plugins. Il existe par exemple des plugins pour :
- Pouvoir faire du 'nesting' dans les feuilles de style
- Utiliser les fonctionnalités les plus récentes de CSS tout en conservant un fichier CSS de sortie compréhensible par tous les navigateurs
- Minifier le fichier CSS de sortie
- Autopréfixer les propriétés CSS devant être préfixées
- Etc ...

Une liste des plugins disponibles est trouvable [ici](https://www.postcss.parts/).

## Installation et configuration

Dans cette partie se trouve la procédure d'installation de PostCSS pour **un seul projet**. Il faut recommancer l'opération pour chaque projet.

### Prérequis 

Node.js & npm => [Installation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### Téléchargement

Il faut d'abord initialiser le projet avec la commande suivante :  

`npm init -y`  

L'option `-y` permet de ne pas avoir à répondre oui à toutes les questions posées par le script.  

Un fichier nommé **package.json** devrait être apparu à la racine du projet.  

Il faut ensuite installer PostCSS dans notre projet :

`npm install -D postcss`

Et installer la CLI qui va  permettre de communiquer avec PostCSS :

`npm install -D postcss-cli`

L'option `-D` permet que ces packages soient considérés comme des dépendances seulement pour le développement. 

PostCSS est maintenant installé dans le projet mais sans plugins il est inutile.

### Création du fichier de configuration

Pour configurer PostCSS il faut créer un fichier nommé **postcss.config.js** à la racine du projet et y coller le code suivant : 

```
module.exports = {
    plugins: [
        // déclaration des plugins utilisés
    ]
}
```

### Création et exécution du script de lancement

La ligne suivante doit être ajoutée au fichier **package.json** dans la partie *script* :

`"postcss:watch": "postcss {chemin vers le fichier CSS source} --dir {chevin vers le fichier CSS de sortie}"`

Pour exécuter PostCSS il faut lancer la commande suivante dans le terminal :

`npm run postcss:watch`

Il faut relancer la commande à chaque fois que des modification ont été effectuées. Pour faire en sorte que les modifications soient prises en compte dès que le fichier source est modifié il faut ajouter `-- watch` à la fin de la commande *postcss:watch*.

## Installation et configuration d'un plugin

Plusieurs modules sont présentés ici et il n'est pas nécessaire de tous les installer et ils sont indépendants les uns des autres.

### Installation

`npm install -D {nom du plugin}`

Il faut ensuite déclarer le plugin dans le fichier **postcss.config.js** en ajoutant la ligne suivante : 

`require('{nom du plugin}'),`

### Configuration 

Tous les plugins ont leur propres options disponibles, il faut donc se référer à la documentation de chaque plugin pour les connaître. 

Généralement, les plugins vont chercher leur configuration dans un fichier **{plugin}.config.js** à la racine de votre projet. Il est recommandé d'utiliser cette méthode quand elle disponible.  
Si ce n'est pas le cas il est conseillé de définir une constante par plugin contenant les différentes options et d'utiliser cette constante dans la déclaration des plugins dans le fichier **postcss.config.js**. Un exemple pour le plugin cssnano est donné sur ce repo.

# Plugins PostCSS

## PostCSSimport

Ce plugin permet d'importer les fichiers CSS les uns dans les autres.

[Lien GitHub](https://github.com/postcss/postcss-import)

Nom à utiliser pour l'installation : `postcss-import`.

### Remarques

Ce plugin doit être placé en premier dans le fichier **postcss.config.js**.

### Options 

La liste des options de ce plugin est disponible [ici](https://github.com/postcss/postcss-import#options).

### Test

En utilisant les fichiers CSS fournis sur ce repo et après avoir exécuter PostCSS, un dossier **public** contenant un fichier **style.css** devrait être apparu et devrait contenir l'ensemble des fichiers CSS sources.

## CSSNano

<img src="img/cssnano_logo.svg" width="100" height="100">

Ce plugin permet d'avoir un fichier CSS de sortie minifié.

[Lien GitHub](https://github.com/cssnano/cssnano)

Nom à utiliser pour l'installation : `cssnano`.

### Configuration 

Ce plugin utilise des *presets* pour changer les options, pour les utiliser il faut ce référer à [cette page](https://cssnano.co/docs/presets/).  
La liste des options de ce plugin est disponible [ici](https://github.com/postcss/postcss-import#options).

### Test

Pour assurer le bon fonctionnement du plugin, il faut vérifier que le fichier de sortie ne contient qu'une seule ligne.

## Autoprefixer

<img src="img/autoprefixer_logo.svg" width="100" height="100">

Ce plugin permet de préfixer automatiquement les propriétés CSS ayant besoin de l'être pour fonctionner sur tous les navigateurs.

[Lien GitHub](https://github.com/postcss/autoprefixer)

Nom à utiliser pour l'installation : `autoprefixer`.

### Configuration 

La liste des options est disponible [ici](https://github.com/postcss/autoprefixer#options).

### Test

Le fichier CSS de sortie devrait avoir maitenant avoir des propriétés préfixés (pour les ancres). Il est possible que la propriété utilisée sur ce repo n'est plus besoin d'être préfixée dans le futur. Si cela arrive il faut trouver une autre propriété ayant besoin d'être préfixée.

## Tailwind

<img src="img/Tailwind_CSS_Logo.svg.png" width="100" height="100">

Ce plugin est en fait une librairie CSS apportant un ensemble de classe permettant d'obtenir un style pour une page web très rapidement.

### Installation

`npm install -D tailwindcss`

### Configuration 

Il faut également créer un fichier **tailwind.config.js** à la racine de votre projet et y coller le code suivant : 
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Pour découvrir les différentes options vous pouvez vous référer à [ce lien](https://tailwindcss.com/docs/configuration).

### Test

Pour vérifier le bon fonctionnement, les lignes spécifiques à TailWind dans le fichier **style.css** doivent être décommentées. Le fichier **index.html** devrait maintenant utiliser des styles de la bibliothèque TailWind.

# Liens utiles 

- [Site officiel](https://postcss.org/)
- [Liste des plugins PostCSS](https://www.postcss.parts/)
- [Vidéo d'installation de PostCSS (en anglais)](https://www.youtube.com/watch?v=ohJcZW60br0)



