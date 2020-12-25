<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nieuw gebruiker aanmaken</title>
</head>

<body>
    <form method="post" action="login.php">
        <div class="login-screen" id="my-login-screen">
            <div class="view">
                <div class="page">
                    <div class="page-content login-screen-content">
                        <div class="login-screen-title">Login</div>
                        <div class="list">
                            <ul>
                                <li class="item-content item-input">
                                    <div class="item-inner">
                                        <div class="item-title item-label">Gebruikersnaam</div>
                                        <div class="item-input-wrap">
                                            <input type="text" name="username" placeholder="Kies een gebruikersnaam">
                                        </div>
                                    </div>
                                </li>
                                <li class="item-content item-input">
                                    <div class="item-inner">
                                        <div class="item-title item-label">Wachtwoord</div>
                                        <div class="item-input-wrap">
                                            <input type="password" name="password"
                                                placeholder="Voer uw wachtwoord in">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="list">
                            <ul>
                                 <li>
                                    <div>
                                        <button type="submit" name="login" class="btn">Login</button>
                                    </div>
                                </li>
                                <li>
                                    <p>
                                        Hebt u nog geen account ? <a href="register.php"
                                            class="item-link list-button login-button">Log in</a>
                                    </p>
                                </li>
                            </ul>
                            <!-- <div class="block-footer">Some text about login information.<br>Click "Sign In" to close Login Screen</div> -->
                            <div class="block-footer">
                                <a href="#" class="item-link list-button link login-screen-close ">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </form>

    <!-- <form method="post" action="register.php">
        <div class="input-group">
            <label>Gebruiker</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label>Email</label>
            <input type="text" name="email">
        </div>
        <div class="input-group">
            <label>Wachtwoord</label>
            <input type="wachtwoord" name="wachtwoord_1">
        </div>
        <div class="input-group">
            <label>Bevestig Wachtwoord</label>
            <input type="wachtwoord" name="wachtwoord_2">
        </div>
        <div class="input-group">
            <button type="submit" name="">Register class="btn"</button>           
        </div>
        <p>
            Bent u al een gebruiker ? <a href="login.php">Log in</a>
        </p>
    </form> -->
</body>

</html>