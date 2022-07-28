import { Component } from '@angular/core';

/**
 * Le but de cette exercice est d'améliorer un chouilla le fonctionnement, on est sur une méthode de fonctionnement assez ancienne et Angular est un monde merveilleux plein d'évolution, votre but sera donc d'améliorer ce code de merde fait par mes soins ( et oui j'ai pris plaisir à écrire un code de ce genre :D)
 * J'ai rajouté volontairement des indices pour ceux qui n'ont pas vraiment l'idée de quoi faire, vous n'êtes pas obligé de les consulter
 */

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
    } else if (this.value < 0) {
      this.error = 'Faut être un peu plus positif';
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
