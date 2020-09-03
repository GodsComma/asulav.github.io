module HomePage exposing (main)

import Html exposing (..)
import Html.Attributes exposing (..)

view model = 
     div [ class "jumbotron" ]
         [ h1 [] [ text " Trip & Fall. The Constant Climb"]
         , p []
             [ text "A space dedicated to showing all of Work in Progress Code a 'developer' can have."]
         ]

main = 
     view "dummy model"
