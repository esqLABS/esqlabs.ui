#' Intro Screen
#'
#' Intro Screen
#'
#' @import htmlwidgets
#'
#' @export
intro_screen <- function(img_path = "img/esqlabs_logo.png", width = NULL, height = '100%') {

  configuration <- list(
    img_path = img_path
  )

  shiny::addResourcePath('/img', system.file('/www/esqlabs.ui/main_bundle/img', package='esqlabs.ui'))

  # describe a React component to send to the browser for rendering.
  component <- reactR::reactMarkup(reactR::component("IntroductionScreen", configuration))

  # create widget
  htmlwidgets::createWidget(
    name = 'intro_screen',
    component,
    width = width,
    height = height,
    package = 'esqlabs.ui'
  )
}

#' Called by HTMLWidgets to produce the widget's root element.
#' @noRd
widget_html.intro_screen <- function(id, style, class, ...) {
  # Create the root div tag
  root_div <- htmltools::tags$div(id = id, class = class, style = style)

  # Attach the dependencies to the root div
  htmltools::attachDependencies(
    root_div,
    list(
      reactR::html_dependency_corejs(),
      reactR::html_dependency_react(),
      reactR::html_dependency_reacttools()
    )
  )
}

#' Shiny bindings for intro_screen
#'
#' Output and render functions for using intro_screen within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a intro_screen
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name intro_screen-shiny
#'
#' @export
intro_screenOutput <- function(outputId, width = '100%', height = '400px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'intro_screen', width, height, package = 'esqlabs.ui')
}

#' @rdname intro_screen-shiny
#' @export
renderIntro_screen <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, intro_screenOutput, env, quoted = TRUE)
}
