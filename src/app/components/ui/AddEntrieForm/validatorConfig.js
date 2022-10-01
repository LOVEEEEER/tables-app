export const validatorConfig = {
  title: {
    isRequired: {
      message: "Поле 'название' не должно быть пустым",
    },
    isMin: {
      message: "Поле 'название' не может быть меньше 3х символов",
      param: 3,
    },
  },
  amount: {
    isRequired: {
      message: "Поле 'количество' не должно быть пустым",
    },
    isMin: {
      message: "Поле 'количество' не может быть меньше 3х символов",
      param: 3,
    },
    isNumber: {
      message: "Поле 'количество' должно быть числом",
    },
  },
  distance: {
    isRequired: {
      message: "Поле 'расстояние' не должно быть пустым",
    },
    isMin: {
      message: "Поле 'расстояние' не может быть меньше 3х символов",
      param: 3,
    },
    isNumber: {
      message: "Поле 'расстояние' должно быть числом",
    },
  },
};
