import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { Product1DescriptionComponent } from './product1-description/product1-description.component';
import { Product2DescriptionComponent } from './product2-description/product2-description.component';
import { Product3DescriptionComponent } from './product3-description/product3-description.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { F1DescComponent } from './f1-desc/f1-desc.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentsComponent } from './payments/payments.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { LeatherChairComponent } from './leather-chair/leather-chair.component';
import { MeshChairComponent } from './mesh-chair/mesh-chair.component';
import { LuxeSofaComponent } from './luxe-sofa/luxe-sofa.component';
import { ReclinerSofaComponent } from './recliner-sofa/recliner-sofa.component';
import { SlidingWardrobeComponent } from './sliding-wardrobe/sliding-wardrobe.component';
import { HingedWardrobeComponent } from './hinged-wardrobe/hinged-wardrobe.component';
import { SonyTvComponent } from './sony-tv/sony-tv.component';
import { LgTvComponent } from './lg-tv/lg-tv.component';
import { JblHeadphonesComponent } from './jbl-headphones/jbl-headphones.component';
import { NoiseHeadphonesComponent } from './noise-headphones/noise-headphones.component';
import { SamsungComponent } from './samsung/samsung.component';
import { OneplusComponent } from './oneplus/oneplus.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingpageComponent },
  { path: 'electronics', component: ElectronicsComponent },
  { path: 'product1-description', component: Product1DescriptionComponent },
  { path: 'product2-description', component: Product2DescriptionComponent },
  { path: 'product3-description', component: Product3DescriptionComponent },
  { path: 'furniture', component: FurnitureComponent },
  { path: 'f1-desc', component: F1DescComponent },
  { path: 'cart', component: CartComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'payments', component: PaymentsComponent, canActivate: [AuthGuard] },
  { path: 'order-confirmation', component: OrderConfirmationComponent, canActivate: [AuthGuard] },
  { path: 'leather-chair', component: LeatherChairComponent },
  { path: 'mesh-chair', component: MeshChairComponent },
  { path: 'luxe-sofa', component: LuxeSofaComponent },
  { path: 'recliner-sofa', component: ReclinerSofaComponent },
  { path: 'sliding-wardrobe', component: SlidingWardrobeComponent },
  { path: 'hinged-wardrobe', component: HingedWardrobeComponent },
  { path: 'sony-tv', component: SonyTvComponent },
  { path: 'lg-tv', component: LgTvComponent },
  { path: 'jbl-headphones', component: JblHeadphonesComponent },
  { path: 'noise-headphones', component: NoiseHeadphonesComponent },
  { path: 'samsung', component: SamsungComponent },
  { path: 'oneplus', component: OneplusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
