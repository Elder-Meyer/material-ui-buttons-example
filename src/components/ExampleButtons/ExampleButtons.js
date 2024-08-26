import React from 'react'

import '../../App.css'
import { BotonesBasicos } from './BotonesBasicos'
import { BotonesTexto } from './BotonesTexto'
import { BotonesContenido } from './BotonesContenido'
import { BotonesContorneados } from './BotonesContorneados'
import { ManejoDeClics } from './ManejoDeClics'
import { BotonesColor } from './BotonesColor'
import { BotonesTamanio } from './BotonesTamanio'
import { BotonesSubir } from './BotonesSubir'
import { BotonesIcoEtiq } from './BotonesIcoEtiq'
import { BotonesIconos } from './BotonesIconos'
import { BotonesIcoTam } from './BotonesIcoTam'
import { BotonesPersonalizados } from './BotonesPersonalizados'
import { BotonesCargando } from './BotonesCargando'
import { ToggleLoading } from './ToggleLoading'
import { BotonesComplex } from './BotonesComplex'


export const ExampleButtons = () => {
  return (
    <>
    <p>Botones</p>
    {/* BOTONES BASICOS */}
    <BotonesBasicos/>

    {/* BOTONES DE TEXTO */}
    <BotonesTexto/>

    {/* BOTONES DE CONTENIDO */}
    <BotonesContenido/>
    
    {/* BOTON CONTORNEADO */}
    <BotonesContorneados/>

    {/* MANEJO DE CLICS */}
    <ManejoDeClics/>

    {/* COLORES */}
    <BotonesColor/>

    {/* TAMAÑOS BOTON*/}
    <BotonesTamanio/>

    {/* SUBIR BOTON */}
    <BotonesSubir/>

    {/* BOTONES CON ICONOS Y ETIQUETAS */}
    <BotonesIcoEtiq/>

    {/* BOTONES DE ICONOS */}
    <BotonesIconos/>

    {/* TAMAÑOS ICONO BOTON*/}
    <BotonesIcoTam/>

    {/* BOTONES PERSONLIZADOS */}
    <BotonesPersonalizados/>

    {/* BOTONES CARGANDO */}
    <BotonesCargando/>

    {/* TOGGLE Y BOTONES */}
    <ToggleLoading/>

    {/* COMPLEX BOTON */}
    <BotonesComplex/>
    </>
  )
}
