window.onerror = HandleError

//+-------------------------------------------------------------------
//
//  Synopsis:   Turns off error messages in dialogs
//
//  Arguments:  none
//
//  returns:    true (tells browser not to handle message)
//
//--------------------------------------------------------------------

function HandleError(message, url, line)
{
    var str = L_Dialog_ErrorMessage + "\n\n" 
        + L_ErrorNumber_Text + line + "\n"
        + message;

    alert (str);
    window.close();

    return true;
}


//+----------------------------------------------------------------------
//
//  Synopsis:   Binds events to controls, determines if the script 
//              debugger is loaded and formats the dialog appropriately
//
//  Arguments:  none.
//
//  Returns:    nothing.
//  
//-----------------------------------------------------------------------

function loadBdy()
{
    var objOptions = window.dialogArguments;    // Options holder
    
    //
    //  Bind event to controls
    //
    btnNo.onclick  = new Function("btnOKClick()");
    btnNo.onkeydown  = new Function("SwitchFocus()");
    btnYes.onclick = new Function("btnYesClick()");
    btnYes.onkeydown = new Function("SwitchFocus()");
    document.onkeypress = new Function("docKeypress()");

    //
    //  Fill the dialog with error information
    //
    spnLine.innerText       = objOptions.errorLine;
    spnCharacter.innerText  = objOptions.errorCharacter;
    spnError.innerText      = objOptions.errorMessage;
    spnCode.innerText       = objOptions.errorCode;
    txaURL.innerText        = objOptions.errorUrl;

    //
    //  If the script debugger is installed, display the text and
    //  yes/no buttons
    //
    if (objOptions.errorDebug)
    {
        divDebug.innerText = L_ContinueScript_Message;
    }

    btnYes.focus();
}   // loadBdy


//+-----------------------------------------------------------------------
//
//  Sysopsis:   If an arrow key is pressed, switch focus to the other
//              button
//
//  Arguments:  none
//
//  Returns:    nothing
//
//------------------------------------------------------------------------

function SwitchFocus()
{
    var HTML_KEY_ARROWLEFT = 37;
    var HTML_KEY_ARROWDOWN = 40;

    var iCode = event.keyCode;
    var strSourceID = event.srcElement.id;

    if (iCode < HTML_KEY_ARROWLEFT || iCode > HTML_KEY_ARROWDOWN)
        return;

    if (strSourceID == "btnYes")
    {
        btnNo.focus();
    }
    else
    {
        btnYes.focus();
    }
}   // SwitchFocus


//+-------------------------------------------------------------------
//
//  Synopsis:   Closes the dialog doing nothing.
//
//  Arguments:  none
//
//  Returns:    nothing
//
//---------------------------------------------------------------------

function btnOKClick()
{
    window.close();
}   // btnOKClick


//+-------------------------------------------------------------------
//
//  Synopsis:   Closes the dialog and launches the script debugger
//
//  Arguments:  none
//
//  Returns:    nothing
//
//--------------------------------------------------------------------

function btnYesClick()
{
    //
    //  Setting returnValue = true will launch the script debugger when
    //  the dialog is dismissed.
    //
    window.returnValue = true;
    window.close();
}   // btnYesClick


//+--------------------------------------------------------------------
//
//  Synopsis:   Checks to see if Y or N key (or other keys if
//              localized) has been pressed.
//
//  Arguments:  none
//
//  Returns:    nothing
//
//---------------------------------------------------------------------

function docKeypress()
{
    var intKeyCode = window.event.keyCode;

    if (intKeyCode == L_AffirmativeKeyCodeLowerCase_Number
        || intKeyCode == L_AffirmativeKeyCodeUpperCase_Number)
    {
        btnYesClick();
    }

    if (intKeyCode == L_NegativeKeyCodeLowerCase_Number
        || intKeyCode == L_NegativeKeyCodeUpperCase_Number)
    {
        btnOKClick();
    }

}   //  docKeypress

