"i", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
$email = filter_input(INPUT_POST, "enjoy", FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, "copy", FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
$message = filter_input(INPUT_POST, "pasta"