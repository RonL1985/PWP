<?php
/**
 * mail-config.php
 * This file contains your reCAPTCHA API keys and your recipient's email addresses.
 *
 * @param string $siteKey your public reCAPTCHA API key
 * @param string $secret your secret reCAPTCHA API key
 * @param array $MAIL_RECIPIENTS array of email addresses and corresponding recipient names to send form responses to
 *
 * @author Rochelle Lewis <rlewis37@cnm.edu>
 *
 * This file contains sensitive information and should ALWAYS be gitignored!
 **/

//the SendGrid SMTP authorization
$smtpUser = '-- SendGrid USER --';
$smtpSecret = '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';

// your Google reCAPTCHA keys here
$siteKey = '6LdaO5YUAAAAAGY1LHJ8RtKtj4sMyW6qNL4kFgdB';
$secret = '6LdaO5YUAAAAAPM0zXaFnz7wKfpb_Ch8PeceGzDj';

/**
 * attach the recipients to the message
 * notice this an array that can include or omit the the recipient's real name
 * use the recipients' real name where possible; this reduces the probability of the Email being marked as spam
 **/
$MAIL_RECIPIENTS = ["mail@email.com", "Recipient Name"];