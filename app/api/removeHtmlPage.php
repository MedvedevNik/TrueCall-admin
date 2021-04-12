<?php 
$newFile = "../../" . $_POST["name"] . ".html";

if (file_exists($newFile)) {
  unlink($newFile);
} else {
  header("HTTP/1.0 400 Bad Request");
}