export const validator = (data, config) => {
  // Создал универсальную функцию валидатора

  const errors = {};
  function validate(data, validateMethod, config) {
    // Здесь с конфига который мы передали берутся ключи ошибок и делаются проверки полей на эти ошибки
    const { message, param } = config;
    switch (validateMethod) {
      case "isRequired":
        if (data.length === 0) return message;
        break;
      case "isMin": {
        if (data.length < param) return message;
        break;
      }
      case "isNumber":
        if (!Number(data)) return config.message;
        break;

      default:
        return config.message;
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(
        data[fieldName],
        validateMethod,
        config[fieldName][validateMethod]
      );
      if (!errors[fieldName] && error) {
        errors[fieldName] = error;
      }
    }
  }
  return errors;
};
