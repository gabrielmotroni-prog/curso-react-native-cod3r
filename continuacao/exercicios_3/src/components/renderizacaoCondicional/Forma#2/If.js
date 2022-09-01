export default props => {
  // caso return true, é retornado elementos filho pelo props.children. Nada de JSX
  if (props.teste) {
    return props.children;
  } else {
    return false; //nao renderiza nada
  }
};
