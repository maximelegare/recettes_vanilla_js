import {MODEL_EXAMPLE} from "./model_cocktail.js"

export const CTRL_COCKTAILS = (action) => {
  switch (action) {
    case "example": {
      console.log("[CTRL_COCKTAILS]")
      return MODEL_EXAMPLE();
    }

    default: {
      return;
    }
  }
};
