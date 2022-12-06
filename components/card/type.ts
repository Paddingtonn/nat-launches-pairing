export interface ICard {
  item: {
    mission_name: string;
    launch_date_utc: string;
    links: {
      mission_patch_small: string;
    };
    rocket: {
      first_stage: {
        cores: [
          {
            core_serial: string;
          }
        ];
      };
      second_stage: {
        payloads: [
          {
            payload_type: string;
            payload_id: string;
          }
        ];
      };
    };
    launch_success?: boolean;
    launch_failure_details: {
      reason: string;
    };
  };
}
