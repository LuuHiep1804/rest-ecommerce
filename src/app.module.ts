import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { OrderModule } from './order/order.module';
import { OrderItemModule } from './order-item/order-item.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { PaymentModule } from './payment/payment.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [CategoryModule, ProductModule, CartModule, CartItemModule, OrderModule, OrderItemModule, AuthModule, ProfileModule, PaymentModule, InvoiceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
