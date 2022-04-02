if (Array.isArray(optionsComputed)) {
  if (Array.isArray(optionsComputed[0].options)) {
    if (this.actualCurrency !== this.configCurrency.localCurrency) {
      optionsComputed[0].options = optionsComputed[0].options.filter(o => o.id !== id);
    } else {
      const mobileCash = {
        label: "cells-gema-panel-option-mobile-cash",
        id: "mobile-cash",
        icon: "coronita:mobile",
        signatureRequired: false
      };
      if (!JSON.stringify(optionsComputed[0].options).includes(id)) {
        optionsComputed[0].options.push(mobileCash);
      }
    }
  }
}
return optionsComputed;