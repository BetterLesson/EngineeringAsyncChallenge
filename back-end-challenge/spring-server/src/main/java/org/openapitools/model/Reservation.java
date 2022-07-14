package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import javax.validation.Valid;
import javax.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import javax.annotation.Generated;

/**
 * Reservation
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2022-07-13T20:52:52.801091500-04:00[America/New_York]")
public class Reservation {

  @JsonProperty("user")
  private String user;

  @JsonProperty("event")
  private String event;

  @JsonProperty("startTime")
  private String startTime;

  @JsonProperty("endTime")
  private String endTime;

  public Reservation user(String user) {
    this.user = user;
    return this;
  }

  /**
   * Get user
   * @return user
  */
  @NotNull 
  @Schema(name = "user", required = true)
  public String getUser() {
    return user;
  }

  public void setUser(String user) {
    this.user = user;
  }

  public Reservation event(String event) {
    this.event = event;
    return this;
  }

  /**
   * Get event
   * @return event
  */
  @NotNull 
  @Schema(name = "event", required = true)
  public String getEvent() {
    return event;
  }

  public void setEvent(String event) {
    this.event = event;
  }

  public Reservation startTime(String startTime) {
    this.startTime = startTime;
    return this;
  }

  /**
   * Get startTime
   * @return startTime
  */
  @NotNull 
  @Schema(name = "startTime", required = true)
  public String getStartTime() {
    return startTime;
  }

  public void setStartTime(String startTime) {
    this.startTime = startTime;
  }

  public Reservation endTime(String endTime) {
    this.endTime = endTime;
    return this;
  }

  /**
   * Get endTime
   * @return endTime
  */
  @NotNull 
  @Schema(name = "endTime", required = true)
  public String getEndTime() {
    return endTime;
  }

  public void setEndTime(String endTime) {
    this.endTime = endTime;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Reservation reservation = (Reservation) o;
    return Objects.equals(this.user, reservation.user) &&
        Objects.equals(this.event, reservation.event) &&
        Objects.equals(this.startTime, reservation.startTime) &&
        Objects.equals(this.endTime, reservation.endTime);
  }

  @Override
  public int hashCode() {
    return Objects.hash(user, event, startTime, endTime);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Reservation {\n");
    sb.append("    user: ").append(toIndentedString(user)).append("\n");
    sb.append("    event: ").append(toIndentedString(event)).append("\n");
    sb.append("    startTime: ").append(toIndentedString(startTime)).append("\n");
    sb.append("    endTime: ").append(toIndentedString(endTime)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

