import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:.set-name": this.onSetName,
      "click:.set-age": this.onSetAgeClick,
      "click:.save-model": this.onSaveClick,
    };
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  onSetName = (): void => {
    const input = this.parent.querySelector("input");

    const name = input.value;

    this.model.set({ name });
  };

  onSaveClick = (): void => {
    this.model.save()
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Change name</button>
        <button class="set-age">set rando age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
