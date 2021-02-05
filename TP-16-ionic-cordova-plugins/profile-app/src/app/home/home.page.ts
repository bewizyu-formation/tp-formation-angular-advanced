import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    public actionSheetController: ActionSheetController,
    private imagePicker: ImagePicker,
  ) { }

  private chooseFromGallery() {
    this.imagePicker.hasReadPermission().then(result => {
      if (result) {
        this.imagePicker.getPictures({
          maximumImagesCount: 1,
          quality: 70
        }).then(images => {
          for (var i = 0; i < images.length; i++) {
            console.log('Image URI: ' + images[i]);
          }
        })
      } else {
        this.imagePicker.requestReadPermission().then();
      }
    })
  }
  async showEditPopup() {
    const actionRef = await this.actionSheetController.create({
      header: 'Choisir votre source',
      buttons: [
        {
          text: 'Depuis la gallerie',
          role: 'destructive',
          icon: 'images-outline',
          handler: () => {
            console.log('Depuis la gallerie');
            this.chooseFromGallery();
          }
        },
        {
          text: 'Depuis caméra',
          role: 'destructive',
          icon: 'camera-outline',
          handler: () => {
            console.log('Depuis la caméra');
            // TODO : faire appelle au plugin natif
          }
        }
      ]
    });
    actionRef.present();
    // console.log("POPUP")
  }

}
