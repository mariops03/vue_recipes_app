export function setBuscar(state, meals){
    state.comidasBuscadas = meals || []
}

export function setBuscarPorLetra(state, meals){
    state.comidasPorLetra = meals || []
}

export function setBuscarPorIngrediente(state, meals){
    state.comidasPorIngrediente = meals || []
}