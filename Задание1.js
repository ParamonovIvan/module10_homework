const result = +prompt('������� �����', '')
if (isNaN(result % 2)) {
  alert('���, �������, �� ��������')
} else if (result % 2 === 0) {
  alert('����� ������')
} else {
  alert('����� ��������')
}