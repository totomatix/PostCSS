# PostCSS

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

## Installation des plugins

Plusieurs modules sont présentés ici et il n'est pas nécessaire de tous les installer et ils sont indépendants les uns des autres.

### PostCSSimport

Ce plugin permet d'importer les fichiers CSS les uns dans les autres.

#### Installation

`npm install -D postcss-import`

#### Configuration 

Il faut déclarer le plugin dans le fichier **postcss.config.js** en ajoutant la ligne suivante : 

`require('postcss-import'),`

#### Test

En utilisant les fichiers CSS fournis sur ce repo et après avoir exécuter PostCSS, un dossier **public** contenant un fichier **style.css** devrait être apparu et devrait contenir l'ensemble des fichiers CSS sources.

### CSSNano

Ce plugin permet d'avoir un fichier CSS de sortie minifié.

#### Installation

`npm install -D cssnano`

#### Configuration 

Il faut déclarer le plugin dans le fichier **postcss.config.js** en ajoutant la ligne suivante : 

`require('cssnano'),`

#### Test

Pour assurer le bon fonctionnement du plugin, il faut vérifier que le fichier de sortie ne contient qu'une seule ligne.

### Autoprefixer

Ce plugin permet de préfixer automatiquement les propriétés CSS ayant besoin de l'être pour fonctionner sur tous les navigateurs.

#### Installation

`npm install -D autoprefixer`

#### Configuration 

Il faut déclarer le plugin dans le fichier **postcss.config.js** en ajoutant la ligne suivante : 

`require('autoprefixer'),`

#### Test

Le fichier CSS de sortie devrait avoir maitenant avoir des propriétés préfixés (pour les ancres). Il est possible que la propriété utilisée sur ce repo n'est plus besoin d'être préfixée dans le futur. Si cela arrive il faut trouver une autre propriété ayant besoin d'être préfixée.s





