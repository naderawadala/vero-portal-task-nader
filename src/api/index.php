	<?php
	 header("Access-Control-Allow-Origin: *");
	$login = curl_init();
	curl_setopt_array($login, [
		CURLOPT_URL => "https://api.baubuddy.de/index.php/login",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "POST",
		CURLOPT_POSTFIELDS => "{\"username\":\"365\", \"password\":\"1\"}",
		CURLOPT_HTTPHEADER => [
			"Authorization: Basic QVBJX0V4cGxvcmVyOjEyMzQ1NmlzQUxhbWVQYXNz",
			"Content-Type: application/json",
			"Access-Control-Allow-Origin: *",
			"Access-Control-Allow-Headers: *"
		],
	]);
	$response = curl_exec($login);
	$err = curl_error($login);
	curl_close($login);
	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		$json = json_decode($response, true);
		$token = $json['oauth']['access_token'];
	}

	$select = curl_init();
	curl_setopt_array($select, [
		CURLOPT_URL => "https://api.baubuddy.de/dev/index.php/v1/tasks/select",
		CURLOPT_RETURNTRANSFER => true,
		CURLOPT_ENCODING => "",
		CURLOPT_MAXREDIRS => 10,
		CURLOPT_TIMEOUT => 30,
		CURLOPT_SSL_VERIFYHOST => 0,
		CURLOPT_SSL_VERIFYPEER => 0,
		CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
		CURLOPT_CUSTOMREQUEST => "GET",
		CURLOPT_HTTPHEADER => [
			"Authorization: Bearer $token",
			"Content-Type: application/json",
			"Access-Control-Allow-Origin: *",
			"Access-Control-Allow-Headers: *"
		],
	]);
	$response = curl_exec($select);
	$err = curl_error($select);
	curl_close($select);
	if ($err) {
		echo "cURL Error #:" . $err;
	} else {
		$response = json_decode($response, true);
		$json = json_encode(array('data' => $response));

		echo $json;
	}
	?>