import {MODEL_EXAMPLE} from "./model_recettes.js"

export const CTRL_RECETTES = (action) => {
  switch (action) {
    case "example": {
      console.log("[CTRL_RECETTES]")
      return MODEL_EXAMPLE();
    }

    default: {
      return;
    }
  }
};
