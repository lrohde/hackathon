<?php
$handle = @fopen("dados.txt", "r");
if ($handle) {
	while (!feof($handle)) {
		$buffer = fgets($handle, 4096);
		$colunas =  = explode(" ", $buffer);
		echo "<table border='1'>";
		echo "<tr>";
		foreach ($colunas as $key => $value) {
			echo "<td>". $value . "</td>";
		}
		echo "</tr>";
		echo "</table>";
	}
	fclose($handle);
}

?>