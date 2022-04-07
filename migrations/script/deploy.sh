export PGUSER=oblog
export PGPASSWORD=oblog

# je crèe les tables
sqitch deploy origin
# j'insère les données
node script/import.js