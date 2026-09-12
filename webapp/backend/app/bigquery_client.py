from google.cloud import bigquery
from .config import settings
import datetime

class BigQueryService:
    def __init__(self):
        try:
            self.client = bigquery.Client(project=settings.GCP_PROJECT_ID)
        except Exception:
            self.client = None

    def log_customer_event(self, user_id: str, event_type: str, metadata: dict):
        """
        Registra eventos de uso del portal de clientes y funnels en BigQuery.
        """
        event_data = {
            "user_id": user_id,
            "event_type": event_type,
            "timestamp": datetime.datetime.utcnow().isoformat(),
            "metadata": str(metadata)
        }
        
        if not self.client:
            print(f"[BigQuery Demo Log]: Evento registrado -> {event_data}")
            return True
            
        dataset_ref = self.client.dataset(settings.BIGQUERY_DATASET)
        table_ref = dataset_ref.table("events_log")
        
        try:
            errors = self.client.insert_rows_json(table_ref, [event_data])
            if errors == []:
                return True
            print(f"Errores en BigQuery: {errors}")
            return False
        except Exception as e:
            print(f"Excepción al insertar en BigQuery: {e}")
            return False

bigquery_service = BigQueryService()
