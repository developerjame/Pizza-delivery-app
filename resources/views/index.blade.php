<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="/images/icon.png">
    <title>Pizza delivery app</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css?family=Source+Serif+Pro:400,600&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="fonts/icomoon/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ asset('/css/styles.css')}}">
</head>

<body>

    <!-- Header section -->
    <div class="container-fluid">
        <div class="row header">
            <div class="col-md-3">
                <img src="{{ asset('/images/header1.jpeg')}}" id="header1" alt="">
            </div>
            <div class="col-md-6" id="introduction">
                <h1>WELCOME TO</h1>
                <h1>ZACS MOZZARELLA PIZZERIA</h1>
                <p class="paragraph">Enjoy the most Delicious Pizza</p>
                <p>By just</p>
                <p class="paragraph">Making Your Order</p>
                <a href="{{'/order'}}">
                    <button id="btn1" type="button">Go to Order Page</button>
                </a>
            </div>
            <div class="col-md-3">
                <img src="{{ asset('/images/header2.jpeg')}}" id="header2" alt="">
            </div>
        </div>
    </div>

    <!-- offers section -->
    <div class="container-fluid offers">
        <h1>Our Product Offerings</h1>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
               <div class="d-block w-100 control">
                    <h4>Neapolitan Pizza</h4>
                    <img src="{{ asset('/images/neapo.jpg')}}" alt="">
               </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100 control">
                    <h4>Chicken Macon BBQ</h4>
                    <img src="{{ asset('/images/silici.jpg')}}" alt="">
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100 control">
                    <h4>Greek Pizza</h4>
                    <img src="{{ asset('/images/greek.jpg')}}" alt="">
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100 control">
                    <h4>Detroit Pizza</h4>
                    <img src="{{ asset('/images/detroit2.jpeg')}}" alt="">
                </div>
              </div>
              <div class="carousel-item">
                <div class="d-block w-100 control">
                    <h4>New York-Style Pizza</h4>
                    <img src="{{ asset('/images/newyork.jpg')}}" alt="">
                </div>
              </div>
            </div>
          </div>
    </div>

    <!-- footer -->
    <footer class="footer-48201">
      
        <div class="container">
          <div class="row">
            <div class="col-md-4 pr-md-5">
              <a href="#" class="footer-site-logo d-block mb-4">Zacs Mozzarella Pizzeria</a>
              <p>Get quality for your money by simply ordering our pizza. Quality and delicacy is our priority, and end-game</p>
            </div>
            <div class="col-md">
              <ul class="list-unstyled nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Portfolio</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="col-md">
              <ul class="list-unstyled nav-links">
                <li><a href="#">Clients</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Journal</a></li>
              </ul>
            </div>
            <div class="col-md">
              <ul class="list-unstyled nav-links">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Partners</a></li>
              </ul>
            </div>
            <div class="col-md text-md-center">
              <ul class="social list-unstyled">
                <li><a href="#"><span class="icon-instagram"></span></a></li>
                <li><a href="#"><span class="icon-twitter"></span></a></li>
                <li><a href="#"><span class="icon-facebook"></span></a></li>
                <li><a href="#"><span class="icon-pinterest"></span></a></li>
                <li><a href="#"><span class="icon-dribbble"></span></a></li>
              </ul>
              <p class=""><a href="#" class="btn btn-tertiary">Contact Us</a></p>
            </div>
          </div> 
  
          <div class="row ">
            <div class="col-12 text-center">
              <div class="copyright mt-5 pt-5">
                <p><small>&copy; 2019-2020 All Rights Reserved.</small></p>
              </div>
            </div>
          </div> 
        </div>
        
      </footer>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="{{ asset('/js/index.js')}}"></script>
</body>

</html>