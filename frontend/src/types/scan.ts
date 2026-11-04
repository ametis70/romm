import type { ScanType } from "@/__generated__";

export type { ScanType };

/** Whether the scan can run without metadata sources. Quick scans reconcile
 *  files; export-only runs regenerate configured output files. */
export function scanNeedsMetadataSource(scanType: ScanType): boolean {
  return scanType !== "quick" && scanType !== "export";
}

/** One `scan` socket event. The provider flags are optional because a
 *  per-rom file refresh sends none of them. */
export interface ScanRequest {
  type: ScanType;
  platforms?: number[];
  platform_fs_slugs?: string[];
  roms_ids?: number[];
  apis: string[];
  launchbox_remote_enabled?: boolean;
}

/** One row of a scan-type picker; `disabled` holds the reason it can't be
 *  picked and replaces the subtitle. */
export interface ScanTypeOption<T extends ScanType = ScanType> {
  title: string;
  subtitle: string;
  value: T;
  disabled?: string | undefined;
}
