var email_re = /[a-zA-Z0-9]+([_.][a-zA-Z0-9])*[a-zA-Z0-9]*@[a-zA-Z0-9]+(-[a-zA-Z0-9])*[a-zA-Z0-9]*\.[a-zA-Z]+/i;

$(document).ready(e => {
  var input = $("#lp-email-input-field");
  var button = $("#lp-email-button");
  var alert_message = $("#lp-email-invalid-input-message");
  
  setPanelContainerMarginTop();
  $("#lp-content-container").css("visibility", "visible");
  $(window).resize(setPanelContainerMarginTop);

  button
    .click(e => {
      if (!email_re.test(input.val())) alert_message.css("visibility", "visible");
    })
    .focusout(e => {
      alert_message.css("visibility", "hidden")
    });
});

function setPanelContainerMarginTop() {
  $("#lp-content-container").css("margin-top", (window.innerWidth > 1200) ? 
    Math.max($(window).height() / 2 - parseInt($("#lp-left-column").height()) / 2, 0) + "px" :
    "0px");
}