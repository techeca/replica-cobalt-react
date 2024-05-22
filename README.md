# Replica Cobalt template con React + Vite

Replica del template utilizado es la web de Cobalt, se utilizó el archivo figma y la web para obtener los estilos y crear componentes.

## Estructura

Para facilitar la modificación se crearon componentes y subponentes para facilitar el manejo de la estructura.

App
    Nav
        Hero
        Info
        Features
        AI
        Join
    Foot

Particiulas con `tsparticles`

## Instalación

### Componentes reutilizables

work in progress :o  

[x] Card
[ ] Card title
[ ] Card description
[x] Button (hover effect)
[x] Button (w/icon)
[x] Input like (typewriter)
[x] Titles
[x] SubTitles
[x] Backgrounds
[x] Navbar
[x] Footer

#### Card

```jsx
<CardCob>
    //content
</CardCob>
```

#### Button (hover effect)

```jsx
<BtnCob text={'Join Whitelist'} />
```

#### Button (with arrow)

```jsx
<BtnOut text={'Learn more'} />
```

#### Titles

```jsx
<Titles>
    Who said finance has to
        <br></br>
    be boring?
</Titles>
```

#### Navbar

```jsx
<NavCob />
```

#### Footer

```jsx
<Foot />
```

#### Hero

```jsx
import appimg from './assets/image.webp'

<Hero
    title={`Unleash the power of intuitive finance`} 
    subtitle={`Say goodbye to the outdated financial tools. Every small business owner, regardless of the background, can now manage their business like a proSimple. Intuitive. And never boring.`} 
    img={appimg}
    toSection={`#intro`} 
/>
```

### Link

Ver Replica


