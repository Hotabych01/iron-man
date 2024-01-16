<?php
$data = [
	"source_id" => '1', // до якого джерела в KeyCRM додавати замовлення
	"buyer" => [
			"full_name"=> $_POST['name'], // ПІБ покупця
			"email"=> $_POST['mail'], // email покупця
			"phone"=> $_POST['phone'], // номер телефону покупця
	],
	"custom_fields" => [
		[
		"uuid" => "OR_1001", //  ідентифікатор поля,
		"value" => $_POST['name'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
		],
		[
		"uuid" => "OR_1002", //  ідентифікатор поля,
		"value" => $_POST['phone'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
		],
		[
		"uuid" => "OR_1003", //  ідентифікатор поля,
		"value" => $_POST['mail'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
		],
		[
		"uuid" => "OR_1004", //  ідентифікатор поля,
		"value" => $_POST['start'] // значення поля. Для полів з типом select (список/мультисписок) передавати масив рядків
		],
		[
		"uuid" => "OR_1005", // ідентифікатор поля,
		"value" => $_POST['end'] // значення поля
		],
		[
		"uuid" => "OR_1006", // ідентифікатор поля,
		"value" => $_POST['date'] // значення поля
		]
	]
];

//  "упаковуємо дані"
$data_string = json_encode($data);

// Сохранить в файл можно так

$file = "keycrm.json";

file_put_contents($file, $data_string);

$file_json = file_get_contents('keycrm.json');

// Ваш унікальний API ключ KeyCRM
$token = 'MTIyNTc0MWJjNjBiZjg4MjNjNGJmOTRhZTIzNDI1N2EwNjBjZTFlNA';

// відправляємо на сервер
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://openapi.keycrm.app/v1/order");
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS,$data_string);
curl_setopt($ch, CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
		"Content-type: application/json",
		"Accept: application/json",
		"Cache-Control: no-cache",
		"Pragma: no-cache",
		'Authorization:  Bearer ' . $token)
);
$result = curl_exec($ch);
curl_close($ch);