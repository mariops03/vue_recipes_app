import { data } from "autoprefixer";
import axiosClient from "../axiosClient";

export function buscar({commit}, keyword){
    axiosClient.get(`search.php?s=${keyword}`).
    then(({data}) => {
        debugger;
        commit('setBuscar', data.meals)
    })
}

export function buscarPorLetra({commit}, letter){
    axiosClient.get(`search.php?f=${letter}`).
    then(({data}) => {
        debugger;
        commit('setBuscarPorLetra', data.meals)
    })
}

export function buscarPorIngrediente({commit}, ingredient){
    axiosClient.get(`filter.php?i=${ingredient}`).
    then(({data}) => {
        commit('setBuscarPorIngrediente', data.meals)
    })
}