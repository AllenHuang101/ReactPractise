function loginAuth(OriginComponent) {
  return (props) => {
    // 從localStorage獲取token

    return <OriginComponent {...props} />;
  };
}
