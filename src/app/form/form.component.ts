import { Component } from '@angular/core';

@Component({
  selector: 'sip-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss'],
})
export class FormComponent {
  public placeholder = 'Saississez un nombre';
  public value = 15;
  public error = undefined;
  public valid = true;
  public result = undefined;

  public onUpdate() {
    this.valid = true;
    if (typeof this.value === 'string') {
      this.error = "mec c'est un string ton truc";
      this.valid = false;
    } else if (!this.value) {
      this.error = 'Wep faut rentrer une valeur ...';
      this.valid = false;
    } else if (this.value >= 0) {
      this.error = 'Faut être un peut plus positif';
      this.valid = false;
    }
  }

  public onSubmit() {
    if (this.valid) {
      this.result = 'Ca marche, bon il a pas de jambe mais ça marche';
    } else {
      this.result = "Hummm, c'est de la merde";
    }
  }
}
