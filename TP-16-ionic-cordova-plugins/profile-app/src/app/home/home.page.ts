import { Component } from '@angular/core';
import { ActionSheetController, Platform } from '@ionic/angular';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  selectedImage = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
  constructor(
    public actionSheetController: ActionSheetController,
    private imagePicker: ImagePicker,
    private camera: Camera,
    private webview : WebView
  ) { }

  private chooseFromGallery() {
    this.imagePicker.hasReadPermission().then(result => {
      if (result) {
        this.imagePicker.getPictures({
          maximumImagesCount: 1,
          quality: 70
        }).then(images => {
          if(!!images[0]){
            console.log(images[0])
            this.selectedImage = this.webview.convertFileSrc(images[0]);
            console.log(this.selectedImage)
          }
        })
      } else {
        this.imagePicker.requestReadPermission().then();
      }
    })
  }

  private chooseFromCamera(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then(data => {
      console.log('DATA FROM CAMERA');
      console.log(data);
      this.selectedImage = this.webview.convertFileSrc(data);
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
            this.chooseFromCamera();
          }
        }
      ]
    });
    actionRef.present();
    // console.log("POPUP")
  }

}
