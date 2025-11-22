## Getting Started

  

First, run the development server:


```bash

#clone the repo 
https://github.com/Rohitsinghkhetwal/dash-e-com.git

2. npm install

3. create a .env file in project.

and paste this .

NEXT_PUBLIC_URL=<your backend url>

RUN: 
npm  run  dev

# or

yarn  dev

# or

pnpm  dev

# or

bun  dev

```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  ## Folder Structure 
  app -  app folder include all the pages routes 
  component -   This folder include all the apps component that are render accross the application.
  Store - It includes the Zustand Store for state management out nextjs app.
  tsconfig - Configuration of typescript .

## Frontend Flow #

1. Products are shown in home page . add to cart options added.
2. After Clicking product , detail page appears , all details about product.
3. After doing Add to cart , Click on cart for view the product detail and placing the order.
4. email OTP varification implementation in cart page.
5. After clicking the place order user mail and products are saved to database and mail sent to the user .


## Live link 

Check it out .

https://dashecom.netlify.app/ 