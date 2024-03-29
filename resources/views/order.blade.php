<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZACS MOZZARELLA PIZZERIA</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css">
    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/css/bootstrap-select.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('/css/styles.css')}}">
</head>

<body>
    <div class="container-fluid order-header">
        <h1>ZACS MOZZARELLA PIZZERIA</h1>
        <h2>Making all Customers Happy</h2>
        <div class="order-paragraph">
            <p>Make your order today and have a memorable feeling</p>
            <p>We offer a variety of tasty and delicious pizzas</p>
        </div>
        <h3>Order Now!</h3>
    </div>
    <div class="order-menu">
        <h1>OUR MENU</h1>
        <div class="row top-row">
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Neapolitan Pizza</b></h4>
                        <p>Once you’ve tasted Neapolitan pizza, you’ll never go back. Then you’ll spend the rest of your
                            life trying to recreate it at home! </p>
                        <div class="popup-overlay">
                            <!--Creates the popup content-->
                            <div class="popup-content">
                                <h2>Neapolitan Pizza</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number0" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size0"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust0"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton0" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn0" type="button">Confirm</button>
                                            <button id="btn20" class="close">Close</button>
                                        </div>
                                    </div>

                                </div>
                                <!--popup's close button-->

                            </div>
                        </div>
                        <!--Content shown when popup is not displayed-->

                        <button class="open">Order</button>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Chicken Macon BBQ</b></h4>
                        <p>A topping of spicy barbeque sauce, diced chicken, cilantro, peppers, and onion all covered
                            with
                            cheese, and baked to bubbly goodness! </p>
                        <div class="popup-overlay1">
                            <!--Creates the popup content-->
                            <div class="popup-content1">
                                <h2>Chicken Macon BBQ</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number1" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size1"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust1"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton1" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn1" type="button">Confirm</button>
                                            <button class="close1">Close</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <button class="open1">Order</button>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Greek Pizza</b></h4>
                        <p>This Greek Pizza is amazing! Not only that, but it’s also a simple dish to prepare. You may
                            look
                            at the directions for this pizza and wonder why I’ve added all the topping on after baking.
                        </p>
                        <div class="popup-overlay2">
                            <!--Creates the popup content-->
                            <div class="popup-content2">
                                <h2>Greek Pizza</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number2" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size2"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust2"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton2" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn2" type="button">Confirm</button>
                                            <button class="close2">Close</button>
                                        </div>
                                    </div>

                                </div>
                                <!--popup's close button-->

                            </div>
                        </div>
                        <!--Content shown when popup is not displayed-->

                        <button class="open2">Order</button>

                    </div>
                </div>
            </div>
        </div>
        <div class="row bottom-row">
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Detroit Pizza</b></h4>
                        <p>Detroit-style pizza is a rectangular pizza with a thick crust that is crispy and chewy. It is
                            traditionally topped with tomato sauce and Wisconsin brick cheese</p>
                        <div class="popup-overlay3">
                            <!--Creates the popup content-->
                            <div class="popup-content3">
                                <h2>Detroit Pizza</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number3" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size3"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust3"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton3" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn3" type="button">Confirm</button>
                                            <button class="close3">Close</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <button class="open3">Order</button>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>New York-Style Pizza</b></h4>
                        <p>New York style pizza is pizza made with a characteristically large hand-tossed thin crust,
                            often
                            sold in wide slices to go.</p>
                        <div class="popup-overlay4">
                            <!--Creates the popup content-->
                            <div class="popup-content4">
                                <h2>New York-Style Pizza</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number4" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size4"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust4"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton4" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn4" type="button">Confirm</button>
                                            <button class="close4">Close</button>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>

                        <button class="open4">Order</button>

                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    <img src="https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c29tZW9uZSUyMGVhdGluZyUyMHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Avatar" style="width:100%">
                    <div class="container">
                        <h4><b>Chicken Hawaiian</b></h4>
                        <p>Hawaiian Chicken is like a cross between a sweet and sour chicken and a brown sugar chicken.
                            It
                            has a sweet sticky sauce, and delightful chunks of pineapple and peppers, served over white
                            rice.</p>
                        <div class="popup-overlay5">
                            <!--Creates the popup content-->
                            <div class="popup-content5">
                                <h2>Chicken Hawaiian</h2>

                                <div class="order-form">
                                    <div class="row first-row">
                                        <div class="col-md-6 email-input">
                                            <label for="form-input" class="form-label">Enter number of pizza</label>
                                            <input type="number" class="form-control" id="pizza-number5" placeholder="1"
                                                min="1">
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col size-selection">
                                            <p>Choose Pizza size you want</p>
                                            <select class="form-select" id="pizza-size5"
                                                aria-label="Default select example">
                                                <option selected>Choose pizza size</option>
                                                <option id="large" value="1200">Large @ 1200</option>
                                                <option id="medium" value="1000">Medium @ 1000</option>
                                                <option id="small" value="600">Small @600</option>
                                            </select>
                                        </div>
                                        <div class="col crust">
                                            <p>Choose preferred crust</p>
                                            <select class="form-select" id="pizza-crust5"
                                                aria-label="Default select example">
                                                <option selected>Choose crust</option>
                                                <option id="crispy" value="120">Crispy @120</option>
                                                <option id="stuffed" value="100">Stuffed @100</option>
                                                <option id="glutten" value="80">Glutten free @80</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col toppings">
                                            <p>Select toppings @ ksh50 each:</p>
                                            <select class="selectpicker" id="SelectQButton5" multiple
                                                data-live-search="true">
                                                <option type="checkbox" value=50>Mashroom</option>
                                                <option type="checkbox" value=50>Anchovies</option>
                                                <option type="checkbox" value=50>Sausage</option>
                                                <option type="checkbox" value=50>Radicchio</option>
                                            </select>
                                        </div>
                                        <div class="col buttons-column">
                                            <button id="btn5" type="button">Confirm</button>
                                            <button class="close5">Close</button>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <button class="open5">Order</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="output">
        <h2>Order Summary:</h2>
        <div id="order-summary">

        </div>
        <div id="total-order-cost">

        </div>
        <div class="radio-form">

        </div>
        <a href="index.html">
            <button id="btn30">Return to homepage</button>
        </a>
        
    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.1/js/bootstrap-select.min.js"></script>
    <script src="{{ asset('/js/index.js')}}"></script>
    <script src="{{ asset('/js/cart.js')}}"></script>
    <script src="{{ asset('/js/order.js')}}"></script>
</body>

</div>

</html>