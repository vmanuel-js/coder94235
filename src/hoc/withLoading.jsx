export const withLoading = (Component) => {
  function ComponentWithLoading(props) {
    if (props.items.length < 1) {
      return <div>Cargando...</div>;
    }
    return <Component {...props} />;
  }

  return ComponentWithLoading;
};
